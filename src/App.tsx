
// import './App.css'
import {  Card, Text, Separator, Heading, Flex, TextField } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./App.css"
import {  ArrowRightIcon, FileTextIcon } from "@radix-ui/react-icons";
function App() {
  // const [count, setCount] = useState(0)

  // const sendMessage = () => {
  //   window.parent.postMessage(
  //     { name: 'conclude', data: 'Custom data passed to the typebot variable' },
  //     '*'
  //   )
  // }
  return (
    <>
      <Flex align='center' style={{paddingTop:'5px'}} >
        <Heading size='5'  color="gray" >CV Builder - Formação</Heading>
      </Flex>
      {/* <Button onClick={sendMessage}> Continuar </Button> */}
      <Separator my="3" size="4" />
      <Flex gap="2" direction="column">

        <Card asChild>          
          <div>
            
            <Flex direction="column" gap="2">
              <Text as="div" size="3" weight="bold" color="gold">
                Experiencia 1
              </Text>
              <Flex align={'center'} gap="2">
                <Text as="div" size="2" weight="bold">
                  Cargo
                </Text>
                <TextField.Root placeholder="Ex: Titulo do Cargo" className="input">
                </TextField.Root>

              </Flex>
              <Flex align={'center'} gap="2">
                <Text as="div" size="2" weight="bold">
                  Empresa
                </Text>
                <TextField.Root placeholder="Ex: Nome da Empresa" className="input">
                </TextField.Root>

              </Flex>
              <Flex align={'center'} gap="2">
                <Text as="div" size="2" weight="bold">
                  Data Entrada
                </Text>
                <input type="date" className="texte"></input>


              </Flex>

              <Flex align={'center'} gap="2">
                <Text as="div" size="2" weight="bold">
                  Data Saida
                </Text>
                <input type="date" className="texte"></input>

              </Flex>
            </Flex>

              
          </div>
          
        </Card>

        <Card asChild>
          <a href="#">
            <Text as="div" size="2" weight="bold">
              Quick PDF <FileTextIcon/>
            </Text>
            <Text as="div" color="gray" size="2">
              Generate Your CV in minutes <ArrowRightIcon/> 
            </Text>
          </a>
        </Card>
        
      </Flex>
     
    </>
  )
}

export default App
