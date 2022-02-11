import React, { useState } from 'react'
import { useRouter } from 'next/router';

import { transparentize } from 'polished';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
// import Title from '../../components/TitleWelcome';

const HomePage = (props) => {
  
  const [username, setUsername] = useState('anaperola');
  const roteamento = useRouter();

  function ChangeName(event) {
    const valor = event.target.value;
    setUsername(valor);
  }

  function Navigation(event){
    event.preventDefault();
    roteamento.push(`/ChatPage/?username=${username}`);
  }

  return (
    <>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: props.config.theme.colors.primary[500],
          backgroundImage: 'url(https://coolwallpapers.me/th700/2933776-great-white-shark___animal-wallpapers.jpg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: transparentize(0.3, props.config.theme.colors.neutrals[700]),
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={Navigation}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Text variant="heading1"
              styleSheet={{
                color: props.config.theme.colors.neutrals['000'],
                fontSize: '24px',
                fontWeight: 550,
              }}
            >
              Seja bem-vindo!
            </Text>
            {/* <Title tag="h2">Seja bem-vindo!</Title> */}
            <Text variant="body3" styleSheet={{ marginBottom: '32px', padding: '2px', color: props.config.theme.colors.neutrals[300] }}>
              {props.config.name}
            </Text>

            <TextField
              value={username}
              onChange={ChangeName}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: props.config.theme.colors.neutrals[200],
                  mainColor: props.config.theme.colors.neutrals[900],
                  mainColorHighlight: props.config.theme.colors.primary[500],
                  backgroundColor: props.config.theme.colors.neutrals[800],
                },
              }} />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: props.config.theme.colors.neutrals["000"],
                mainColor: props.config.theme.colors.primary[500],
                mainColorLight: props.config.theme.colors.primary[400],
                mainColorStrong: props.config.theme.colors.primary[600],
              }} />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: props.config.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: props.config.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${username}.png`} />
            <Text
              variant="body4"
              styleSheet={{
                color: props.config.theme.colors.neutrals[200],
                backgroundColor: props.config.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );

}
export default HomePage;