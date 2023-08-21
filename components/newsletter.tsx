export default function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* CTA box */}
        <div className="relative bg-purple-600 py-10 px-8 md:py-16 md:px-12" data-aos="fade-up">

          <div className="relative flex flex-col lg:flex-row justify-between items-center">

            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 text-white mb-2">Connect with us</h3>
              <p className="text-purple-200 text-lg">Email: info@tigercybersecurity.com</p>
              <p className="text-purple-200 text-lg">Phone: 647 948 9072</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
