import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FF00', dark: '#FF0090' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
        
      
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Cuidados 
        </ThemedText>
      </ThemedView>
      <ThemedText> Tatoos</ThemedText>
      <Collapsible title="Mantenha sua tatoo limpa ">
        <ThemedText>
         {' '}
          <ThemedText type="defaultSemiBold">Deve manter a tatoo limpa lavando pelo menos 3 vezes ao dia 
             nos 5 primeiros dias, com agua morna e sabão neutro</ThemedText>
        </ThemedText>
      </Collapsible>



      <Collapsible title="Não tire as casquinhas ">
        <ThemedText>
        É normal que as novas tatoos descasquem, não as retire, sua pele esta cicatrizando, se tirar é possovel que a tinta saia junto e fique falhas{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> 
        </ThemedText>
      </Collapsible>



      <ThemedText>Piersings</ThemedText>

      <Collapsible title="Mantenha seu piercing limpo ">
        <ThemedText>
         duas vezes ao dia com soro fisiológico e sabonete neutro ou antibacteriano, lave sempre as mãos antes de tocar no local
          <ThemedText type="defaultSemiBold"></ThemedText> 
        </ThemedText>
      </Collapsible>




      <Collapsible title="o que não posso fazer? ">
        <ThemedText>
        Evite piscinas, mar, álcool, iodo e cosméticos, e tenha uma dieta equilibrada, rica em frutas e vegetais, evitando gorduras e ultraprocessado.
         <ThemedText type="defaultSemiBold"></ThemedText> 
        </ThemedText>
      </Collapsible>



    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '1C1C1C',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
