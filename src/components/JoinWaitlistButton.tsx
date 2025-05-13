import { useState } from 'react';
import { FiMail } from 'react-icons/fi';

export default function JoinWaitlistButton() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="text-center flex flex-col items-center gap-4">
      <button
        type="button"
        onClick={() => setShowForm(!showForm)}
        className="bg-cta text-background px-6 py-3 rounded-lg inline-flex items-center gap-2 cursor-pointer hover:bg-accent-gradient transition duration-300 ease-in-out"
      >
        <FiMail className="size-5 flex-shrink-0" /> Join the Waitlist
      </button>
      {/* based on the showform state display the form, it should always be in the DOM */}

      <div className={showForm ? 'block' : 'hidden'}>
        <iframe
          title="Join Waitlist Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSd7MtnYW-yI_dF_WDMJRBXlRTKI8kPY1ukjJA4f65e8ox0dMg/viewform?embedded=true"
          scrolling="no"
          width="500"
          height="430"
          frameBorder="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
