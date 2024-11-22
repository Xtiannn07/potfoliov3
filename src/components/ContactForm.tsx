import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSending(true);
    emailjs.sendForm(
      'default_service',
      'template_9zf7hrs',
      form.current,
      '9hohlHYh-6JdA42tS'
    )
      .then(() => {
        alert('Message sent successfully!');
        if (form.current) form.current.reset();
      })
      .catch((error) => {
        alert('Failed to send message. Please try again.');
        console.error(error);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-6 max-w-md mx-auto">
      <div>
        <label htmlFor="from_name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          name="from_name"
          id="from_name"
          required
          className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-primary outline-none"
        />
      </div>
      
      <div>
        <label htmlFor="email_id" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          name="email_id"
          id="email_id"
          required
          className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-primary outline-none"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          required
          rows={4}
          className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-primary outline-none"
        />
      </div>
      
      <button
        type="submit"
        disabled={isSending}
        className="w-full cta-button disabled:opacity-50"
      >
        {isSending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;