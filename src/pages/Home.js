function Home1() {
  let str1 = 'เอกวิศว์ ท่าหาด'
  let value1 = 10
  let value2 = 30
  let sum=value1+value2

	let colors = ['red', 'green', 'blue', 'yellow']
	const result2=(
    <ul>
      {colors.map(c => <li>{c}</li>)}
    </ul>
  )

	const result = (
		<div>
			ผลคะแนนของ คุณ{str1}<br/>
      ผลคะแนนสอบครั้งที่ 1 : {value1}<br/>
			ผลคะแนนสอบครั้งที่ 2 : {value2}<br/> 
      ผลรวมคะแนนสอบ : {sum} คะแนน     
		</div>
	)




  return (
    
    <div style={{textAlign:"center"}}>
      <h1>VALUE from Home1</h1><br/>
      {result}<br/>
      {result2}
      <br/><br/><br/><br/>
    </div>

  );
}

export default Home1;