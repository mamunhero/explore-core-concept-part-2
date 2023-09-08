export default function Friend({friend}){
  
  const {name, email, phone, company, website} = friend
  return(
    <div className="box">
      <h4>Name: {name}</h4>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Company: {company.name}</p>
      <p>Website: {website}</p>
    </div>
  )
}