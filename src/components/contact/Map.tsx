import React from "react";

export default function Map() {
  return (
    <section className="w-full h-fit">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7486.4048465108945!2d85.790219!3d20.250438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a717194509c3%3A0xc289f246809ae6d7!2sMR%20Corporate%20-%20Integrated%20Facility%20Management!5e0!3m2!1sen!2sin!4v1727982461181!5m2!1sen!2sin"
        className="w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
