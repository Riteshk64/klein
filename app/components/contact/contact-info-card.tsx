export function ContactInfoCard() {
  return (
    <div className="rounded-2xl bg-gray-50 p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>

      <div className="mt-6 space-y-6 text-gray-600">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Address
          </p>
          <p className="mt-2 leading-7">
            Klein Motors Pvt. Ltd.
            <br />
            Mumbai, Maharashtra, India
          </p>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Phone
          </p>
          <p className="mt-2 leading-7">+91 98765 43210</p>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Email
          </p>
          <a
            className="mt-2 inline-block leading-7 text-[#1E3A8A] hover:text-blue-700"
            href="mailto:info@kleinmotors.com"
          >
            info@kleinmotors.com
          </a>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Working Hours
          </p>
          <p className="mt-2 leading-7">
            Monday - Saturday
            <br />
            9:00 AM - 6:00 PM
          </p>
        </div>
      </div>
    </div>
  );
}
