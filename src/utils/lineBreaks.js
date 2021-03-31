import sanitizeHtml from 'sanitize-html';

export default (text) => sanitizeHtml(text.replace(/\n/g, '<br />'));
