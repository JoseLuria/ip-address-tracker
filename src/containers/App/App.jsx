import Layout from "../../layout/Layout"
import Form from "../../components/Form/Form"
import IpCard from "../../components/IpCard/IpCard"
import CardContend from "../../components/CardContend/CardContend"
import { useState } from "react"

function App() {
  const [ipNumber, setIpNumber] = useState("")
  const [ipData, setIpData] = useState(undefined)
  const [error, setError] = useState(false)
  const [loader, setLoader] = useState(false)

  const handleIpNumber = (target) => {
    setIpNumber(target.value)
  }

  const handleIpData = async e => {
    e.preventDefault()
    
    if(ipNumber.length > 0){
      setError(false)
      setIpData(undefined)
      setLoader(true)
      const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_API_KEY}&ipAddress=${ipNumber}`)
      const result = await response.json()
      
      if(result.ip) {
        setIpData(result)
        setIpNumber("")
      }else{
        setError(true)
      }
      setLoader(false)
    } 
  }

  return (
    <Layout 
      loader={loader}
      lat={ipData?.location?.lat}
      long={ipData?.location?.lng}
    >
      <Form 
        handleIpNumber={handleIpNumber}
        ipNumber={ipNumber}
        handleIpData={handleIpData}
        error={error}
      />
      <IpCard show={ipData && true}>
        <CardContend title={"IP Address"} text={ipData?.ip}/>
        <CardContend title={"Location"} text={`${ipData?.location?.city}, ${ipData?.location?.country}`}/>
        <CardContend title={"Timezone"} text={ipData?.location?.timezone} time/>
        <CardContend title={"Isp"} text={ipData?.isp}/>
      </IpCard>
    </Layout>
  )
}

export default App
