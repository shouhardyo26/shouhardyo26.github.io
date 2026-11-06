import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateContactForm,
  sanitizeText,
  formatMailtoUrl,
  formatGmailComposeUrl,
  formatWhatsAppUrl,
} from './validation';

test('sanitizeText trims and strips HTML brackets', () => {
  assert.equal(sanitizeText('  hello <world>  '), 'hello world');
  assert.equal(sanitizeText(''), '');
});

test('validateContactForm passes with valid inputs', () => {
  const result = validateContactForm({
    name: 'Rahim Ahmed',
    email: 'rahim@example.com',
    subject: 'Collaboration',
    message: 'Hello Shouhardyo, I really liked your technology portfolio work!',
  });
  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
});

test('validateContactForm rejects invalid emails and short messages', () => {
  const result = validateContactForm({
    name: 'A',
    email: 'bad-email',
    subject: '',
    message: 'short',
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.message);
});

test('formatMailtoUrl constructs proper mailto URI', () => {
  const url = formatMailtoUrl({
    name: 'Tanvir',
    email: 'tanvir@test.com',
    subject: 'AI Discussion',
    message: 'Let us connect.',
  });
  assert.ok(url.startsWith('mailto:shouhardyoislam@gmail.com?'));
  assert.ok(url.includes('AI%20Discussion'));
});

test('formatGmailComposeUrl constructs proper webmail URI', () => {
  const url = formatGmailComposeUrl({
    name: 'Tanvir',
    email: 'tanvir@test.com',
    subject: 'Collaboration Project',
    message: 'Hello Shouhardyo!',
  });
  assert.ok(url.startsWith('https://mail.google.com/mail/?view=cm&fs=1&to=shouhardyoislam@gmail.com'));
  assert.ok(url.includes('Collaboration%20Project'));
});

test('formatWhatsAppUrl constructs proper wa.me URI', () => {
  const url = formatWhatsAppUrl({
    name: 'Tanvir',
    email: 'tanvir@test.com',
    subject: 'Project',
    message: 'Hello!',
  });
  assert.ok(url.startsWith('http://wa.me/+8801319873020?text='));
  assert.ok(url.includes('Tanvir'));
});
