import appConfig from '../../config.json';
import { Box, Text, Image } from '@skynexui/components';

export function MessageList(props) {
  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1,
        color: appConfig.theme.colors.neutrals["000"],
        marginBottom: '16px',
      }}
    >
      {props.mensagens.map((mensagem)=> {
        return (
          <Text
            key={mensagem.id}
            tag="li"
            styleSheet={{
              borderRadius: '5px',
              padding: '6px',
              marginBottom: '12px',
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[700],
              }
            }}
          >
            <Box
              styleSheet={{
                marginBottom: '8px',
                display:'flex',
              }}
            >
              <Image
                styleSheet={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  marginRight: '8px',
                }}
                src={`https://github.com/${mensagem.from}.png`}
              />
              <Text tag="strong">
                {mensagem.from}
              </Text>
              <Text
                styleSheet={{
                  fontSize: '10px',
                  marginLeft: '90px',
                  color: appConfig.theme.colors.neutrals[300],
                }}
                tag="span"
              >
                {(new Date().toLocaleDateString())}
              </Text>
            </Box>
            {mensagem.text.startsWith(':sticker:' )
              ? (
                <Image src={mensagem.text.replace(':sticker:', '')} />
              )
            : (
              mensagem.text
            )}
            {/* {mensagem.text} */}
          </Text>
        )
      })}
      
    </Box>
  )
}