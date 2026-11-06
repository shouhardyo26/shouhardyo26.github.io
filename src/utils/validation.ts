import { ContactFormData, ValidationResult } from '../types';

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function sanitizeText(text: string): string {
  if (!text) return '';
  return text.trim().replace(/[<>]/g, '');
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  const cleanName = sanitizeText(data.name);
  if (!cleanName) {
    errors.name = 'Please enter your name.';
  } else if (cleanName.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  } else if (cleanName.length > 80) {
    errors.name = 'Name is too long (max 80 characters).';
  }

  const cleanEmail = data.email.trim();
  if (!cleanEmail) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_REGEX.test(cleanEmail)) {
    errors.email = 'Please enter a valid email address.';
  }

  const cleanMessage = sanitizeText(data.message);
  if (!cleanMessage) {
    errors.message = 'Please enter a message.';
  } else if (cleanMessage.length < 10) {
    errors.message = 'Message must be at least 10 characters long.';
  } else if (cleanMessage.length > 2500) {
    errors.message = 'Message is too long (max 2500 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function formatMailtoUrl(data: ContactFormData): string {
  const subject = encodeURIComponent(data.subject ? `[Portfolio] ${data.subject}` : `Message from ${data.name}`);
  const body = encodeURIComponent(
    `Hello Shouhardyo,\n\n${data.message}\n\n---\nFrom: ${data.name}\nEmail: ${data.email}`
  );
  return `mailto:shouhardyoislam@gmail.com?subject=${subject}&body=${body}`;
}

export function formatGmailComposeUrl(data: ContactFormData): string {
  const subject = encodeURIComponent(data.subject ? `[Portfolio] ${data.subject}` : `Message from ${data.name}`);
  const body = encodeURIComponent(
    `Hello Shouhardyo,\n\n${data.message}\n\n---\nFrom: ${data.name}\nEmail: ${data.email}`
  );
  return `https://mail.google.com/mail/?view=cm&fs=1&to=shouhardyoislam@gmail.com&su=${subject}&body=${body}`;
}

export function formatWhatsAppUrl(data: ContactFormData): string {
  const text = encodeURIComponent(
    `Hello Shouhardyo! I am ${data.name} (${data.email}). ${data.subject ? `Subject: ${data.subject}. ` : ''}${data.message}`
  );
  return `http://wa.me/+8801319873020?text=${text}`;
}
