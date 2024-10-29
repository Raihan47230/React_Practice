export default function User({TotalData}) {
     console.log(TotalData)
     const{id,title}=TotalData
  return (
    <div className="boxer">
      <h4>title : {title}</h4>
     <h4>id : {id}</h4>
    </div>
  )
}
