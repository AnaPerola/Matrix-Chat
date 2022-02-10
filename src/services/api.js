import { createClient} from '@supabase/supabase-js';

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzY0NDk3MiwiZXhwIjoxOTU5MjIwOTcyfQ.iWxV7vtI4NyM_dYhnE5EYoxi5P_7MMmx1ovNuGxaKrw'
const SUPABASE_URL = 'https://jhpjojtssstjurvfapzj.supabase.co'
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

const MessageRealTime = (addMessage) => {
  return supabaseClient
    .from('mensagens')
    .on('INSERT', (respostaLive) => {
      addMessage(respostaLive.new);
    })
    .subscribe();
}

export default MessageRealTime;