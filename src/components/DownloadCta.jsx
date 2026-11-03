import { DOWNLOAD_APP_URL } from '../content.js'
import packingCustom from '../assets/screens/packing-custom.webp'
import PhoneFrame from './PhoneFrame.jsx'

export default function DownloadCta() {
  return (
    <section className="cta" id="download">
      <div className="container">
        <div className="cta-card reveal">
          <div className="cta-copy">
            <p className="eyebrow">Ready for your next trip?</p>
            <h2>Plan it. Split it. Pack it.</h2>
            <p>
              Free to use on Android, iOS and the web. Create your first trip, share the invite
              code and let MyTripPilot handle the maths.
            </p>
            <a className="btn btn-primary btn-lg" href={DOWNLOAD_APP_URL}>Download App</a>
          </div>
          <div className="cta-media">
            <PhoneFrame src={packingCustom} alt="Packing list showing All packed and ready" />
          </div>
        </div>
      </div>
    </section>
  )
}
