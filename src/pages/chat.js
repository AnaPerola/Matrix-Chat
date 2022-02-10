// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

// import { ButtonSendSticker } from '../components/ButtonSendSticker';

// import { Box, TextField } from '@skynexui/components';
// import appConfig from '../config.json';

// import Header from '../components/Header';
// import { MessageList } from '../components/MessageList';

// import { MessageRealTime } from '../services/api'

// const ChatPage= () => {
//   const [ mensagem, setMensagem] = useState('');
//   const [ list , setList] = useState([]);
//   const roteamento = useRouter();
//   // fazer roteamento com useEffect e useState

//   const userlogado = roteamento.query.username;
//   // useEffect roda sempre quando a pagina carrega 
//   useEffect(() => {
//     supabaseClient
//       .from('mensagens')
//       .select('*')
//       .order('id', { ascending: false })
//       .then(({ data }) => {
//         setList(data)
//       });
//     MessageRealTime((newMessage) => {
//       handleNovaMensagem(newMessage)
//       setList((ValorAtualList) => {
//         return [
//           newMessage,
//           ...ValorAtualList,
//         ]}
//       );
//     });
//   }, []);
  

//   function handleNovaMensagem(novaMensagem) {
//     const mensagem = {
//       id: list.length + 1 ,
//       from: userlogado,
//       text: novaMensagem,
//     }

//     supabaseClient
//       .from('mensagens')
//       .insert([
//         mensagem
//       ])
//       .then(({ data })=> {
//         console.log('O que chega:', data)
       
//       });
//     setMensagem('');
//   }

//   return (
//     <Box
//       styleSheet={{
//         display: 'flex', alignItems: 'center', justifyContent: 'center',
//         backgroundColor: appConfig.theme.colors.primary[500],
//         backgroundImage: `url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)`,
//         backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
//         color: appConfig.theme.colors.neutrals['000']
//       }}
//     >
//       <Box
//         styleSheet={{
//           display: 'flex',
//           flexDirection: 'column',
//           flex: 1,
//           boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
//           borderRadius: '5px',
//           backgroundColor: appConfig.theme.colors.neutrals[700],
//           height: '100%',
//           maxWidth: '95%',
//           maxHeight: '95vh',
//           padding: '32px',
//         }}
//       >
//         <Header />
//         <Box
//           styleSheet={{
//             position: 'relative',
//             display: 'flex',
//             flex: 1,
//             height: '80%',
//             backgroundColor: appConfig.theme.colors.neutrals[600],
//             flexDirection: 'column',
//             borderRadius: '5px',
//             padding: '16px',
//           }}
//         >
          
//           <MessageList mensagens={list} />
          
//           <Box
//             as="form"
//             styleSheet={{
//               display: 'flex',
//               alignItems: 'center',
//             }}
//           >
//             <TextField
//               value={mensagem}
//               onChange={(event) => {
//                 const valor = event.target.value;
//                 setMensagem(valor)
//               }}
//               onKeyPress={(event) => {
//                 if(event.key === 'Enter'){
//                   event.preventDefault();
//                   handleNovaMensagem(mensagem);
//                 }
//               }}
//               placeholder="Insira sua mensagem aqui..."
//               type="textarea"
//               styleSheet={{
//                 width: '100%',
//                 border: '0',
//                 resize: 'none',
//                 borderRadius: '5px',
//                 padding: '6px 8px',
//                 backgroundColor: appConfig.theme.colors.neutrals[800],
//                 marginRight: '12px',
//                 color: appConfig.theme.colors.neutrals[200],
//               }}
//             />
//             {/* USANDO O COMPONENTE E SALVANDO NO BANCO */}
//             <ButtonSendSticker 
//               onStickerClick={(sticker) => {
//                 handleNovaMensagem(`:sticker: ${sticker}`);
//               }}
//             />
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   )
// }
// export default ChatPage;