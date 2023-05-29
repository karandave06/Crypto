 
  import '../../main.scss';

const Error = ({massage, status}) => {
  return (
    <div className="error">
       <h1>
      <span> {status}</span> {massage}
       </h1>
    </div>
  )
}

export default Error
