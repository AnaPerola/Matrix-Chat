import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import appConfig from '../config.json';

import { createClient }   from '@supabase/supabase-js';
import { Box, TextField, Button } from '@skynexui/components';
import { transparentize } from 'polished';

import ButtonSendSticker from '../components/ButtonSendSticker/index';
import Header  from '../components/Header';
import MessageList  from '../components/MessageList';

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xa2FraGRlYnplcHNkYnNoZnFjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NTU2MDQyNiwiZXhwIjoxOTYxMTM2NDI2fQ.r6N7SGV23CSCPu7tAPLouDUvugq5MZs60Dy-WzL8oDYc'
const SUPABASE_URL = 'https://oqkakhdebzepsdbshfqc.supabase.co.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xa2FraGRlYnplcHNkYnNoZnFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDU1NjA0MjYsImV4cCI6MTk2MTEzNjQyNn0.gx0zpd6Ui2-YIv9GKdFC9VztQHfhNMn8ORLfe7VFo5c'
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

function MessageRealTime(addMessage) {
  return supabaseClient
    .from('mensagens')
    .on('INSERT', (respostaBack) => {
      addMessage(respostaBack.new);
    })
    .subscribe();
  }

const ChatPage = () => {
  const [ mensagem, setMensagem] = useState('');
  const [ list , setList] = useState([]);
  const roteamento = useRouter();
  // fazer roteamento com useEffect e useState
  const userlogado = roteamento.query.username;
  // useEffect roda sempre quando a pagina carrega 
  useEffect(() => {
    supabaseClient
      .from('mensagens')
      .select('*')
      .order('id', { ascending: false })
      .then(({ data }) => {
        setList(data)
      });
    const subscription = MessageRealTime((newMessage) => {
      setList((ValorAtualList) => {
        return [
          newMessage,
          ...ValorAtualList,
        ]
      });
    });

    return () => {
      subscription.unsubscribe();
    }
  }, []);
  

  function handleNovaMensagem(novaMensagem) {
    const mensagem = {
      id: list.length + 1 ,
      from: userlogado,
      text: novaMensagem,
    }

    supabaseClient
      .from('mensagens')
      .insert([
        mensagem
      ])
      .then(({ data })=> {
        console.log('O que chega:', data)
      });
    setMensagem('');
  }

  return (
    <Box
      styleSheet={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: appConfig.theme.colors.primary[500],
        backgroundImage: `url(https://coolwallpapers.me/th700/2933776-great-white-shark___animal-wallpapers.jpg)`,
        backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        color: appConfig.theme.colors.neutrals['000']
      }}
    >
      <Box
        styleSheet={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
          borderRadius: '5px',
          backgroundColor: transparentize(0.3, appConfig.theme.colors.neutrals[700]),
          height: '100%',
          maxWidth: '95%',
          maxHeight: '95vh',
          padding: '32px',
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: 'relative',
            display: 'flex',
            flex: 1,
            height: '80%',
            backgroundColor: transparentize(0.3,appConfig.theme.colors.neutrals[600]),
            flexDirection: 'column',
            borderRadius: '5px',
            padding: '16px',
          }}
        >
          
          <MessageList mensagens={list} />
          
          <Box
            as="form"
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <TextField
              value={mensagem}
              onChange={(event) => {
                const valor = event.target.value;
                setMensagem(valor)
              }}
              onKeyPress={(event) => {
                if(event.key === 'Enter'){
                  event.preventDefault();
                  handleNovaMensagem(mensagem);
                }
              }}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                width: '100%',
                border: '0',
                resize: 'none',
                borderRadius: '5px',
                padding: '6px 8px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: '12px',
                color: appConfig.theme.colors.neutrals[200],
              }}
            />
            {/* USANDO O COMPONENTE E SALVANDO NO BANCO */}
            <ButtonSendSticker 
              onStickerClick={(sticker) => {
                handleNovaMensagem(`:sticker: ${sticker}`);
              }}
            />

            <Button iconName="arrowRight" label="" rounded="full" variant="secondary" 
              onClick={(event) => {
                handleNovaMensagem(mensagem)
              }}
              styleSheet={{
                marginLeft:'10px',
                marginBottom: '8px',
                minWidth: '50px',
                minHeight: '50px',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default ChatPage;