import React, { useEffect , useState } from 'react'
import axios from 'axios'

function JasonServer() {
    const [data,setData] = useState([])
    useEffect(() => {
      axios.get('http://localhost:3032/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
    }, [])
    
  return (
    <div><table>
        <thead>
            <tr>
                <th>username</th>
                <th>title</th>
                <th>body</th>
            </tr>
            </thead>
            <tbody>
                {data.map((d,i)=> {
                    return <tr key={i}>
                        <td>{d.username}</td>
                        <td>{d.title}</td>
                        <td>{d.body}</td>
                    </tr>
                })}
                </tbody>
            </table>
            </div>
  )
}

export default JasonServer