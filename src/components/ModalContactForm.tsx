// ModalContactForm.tsx
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

interface ModalContactFormProps {
  onClose: () => void; // Function to close the modal
}

const ModalContactForm = ({ onClose }: ModalContactFormProps) => {
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
        toast.success('Message sent successfully!');
        if (form.current) form.current.reset();
      })
      .catch((error) => {
        toast.error('Failed to send message. Please try again.');
        console.error(error);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 pt-20">
      <div className="bg-neutral-800 text-white p-6 rounded-2xl w-3/4 md:w-11/12 mt-24 sm:mt-40 md:mt-5 max-w-lg relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white font-bold"
        >
          X
        </button>

        <h2 className="text-xl">Hire Me</h2>
        <p className="mx-2 my-1">Please fill out the form below, and I will get back to you shortly.</p>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="field">
            <label htmlFor="from_name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              id="from_name"
              required
              className="w-full text-black px-2 py-2 bg-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
            />
          </div>
          
          <div className="field">
            <label htmlFor="email_id" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email_id"
              id="email_id"
              required
              className="w-full text-black px-2 py-2 bg-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
            />
          </div>
          
          <div className="field">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              className="w-full text-black px-2 py-2 bg-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
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
      </div>
    </div>
  );
};

export default ModalContactForm;
