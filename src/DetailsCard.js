export default function DetailsCard({ ipDetails }) {
  return (
    <div className="details-card">
      <div className='details-col'>
        <span className='details-text details-label'>Ip Address</span>
        <span className='details-text details-value'>{ipDetails.ip}</span>
      </div>
      <div className='vertical-line'></div>
      <div className='details-col'>
        <span className='details-text details-label'>Location</span>
        <span className='details-text details-value'>{`${ipDetails.location.city}, ${ipDetails.location.region}`}</span>
      </div>
      <div className='vertical-line'></div>
      <div className='details-col'>
        <span className='details-text details-label'>Timezone</span>
        <span className='details-text details-value'>UTC {ipDetails.location.timezone}</span>
      </div>
      <div className='vertical-line'></div>
      <div className='details-col'>
        <span className='details-text details-label'>ISP</span>
        <span className='details-text details-value'>{ipDetails.isp}</span>
      </div>
    </div>
  );
}
