export default function Contact(){
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold">Payments & Contact</h2>
      <div className="grid md:grid-cols-2 gap-8 mt-6">
        <div className="p-6 rounded-2xl border bg-white">
          <h3 className="font-semibold text-lg">Bank Deposit (BPI)</h3>
          <div className="text-gray-700 mt-2">
            <div>Account Name: <b>Rosemarie Mendoza Harmiel</b></div>
            <div>Account Number: <b>004609-1351-53</b></div>
            <div>Bank: <b>BPI (Bank of the Philippine Islands)</b></div>
            <div>Branch: <b>EDSA Balintawak</b></div>
            <div>Receiver Phone: <b>+63 921-2121-228</b></div>
          </div>

          <h3 className="font-semibold text-lg mt-6">GCash</h3>
          <div className="text-gray-700 mt-2">
            <div>Number: <b>+63 921-2121-228</b></div>
            <div>Name: <b>Rosemarie Harmiel</b></div>
          </div>
        </div>

        <div className="p-6 rounded-2xl border bg-white">
          <h3 className="font-semibold text-lg">Message Us</h3>
          <p className="text-gray-600 text-sm">We usually respond on Facebook Messenger. You can also leave a message here:</p>
          <form name="contact" method="POST" data-netlify="true" className="mt-4 space-y-3">
            <input type="hidden" name="form-name" value="contact" />
            <input className="w-full border rounded-lg p-2" name="name" placeholder="Your name" required/>
            <input className="w-full border rounded-lg p-2" name="email" placeholder="Your email"/>
            <textarea className="w-full border rounded-lg p-2" name="message" placeholder="What do you need?" rows="5" required></textarea>
            <button className="px-4 py-2 rounded-lg bg-sky-600 text-white">Send</button>
          </form>
          <a className="inline-block mt-4 px-4 py-2 rounded-lg bg-gray-900 text-white"
             href="https://www.facebook.com/messages/t/shopforlesspasabuydubaitopinas" target="_blank" rel="noreferrer">Open Messenger</a>
        </div>
      </div>
    </section>
  )
}
