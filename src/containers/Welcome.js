import React from 'react'
import {Container, BoxIllustration, BoxLogo, BoxIHue, Text, Button} from '../styles/welcomeStyle';

function Welcome() {
    return (
        <Container>
            <BoxLogo>
              <p className="shadow">Pet Walk</p>
              <p className="title">Pet Walk</p>
            </BoxLogo>
            <BoxIllustration>
              <BoxIHue></BoxIHue>
              <img src="https://s3-alpha-sig.figma.com/img/95a6/8dcb/6e465de8e71e68958e70a78d2210b0ae?Expires=1597622400&Signature=I2GAgs8xL5ydTV838Rp85fhIcg1Lom0VPVF84sdKFGQZyrFZ4fY22DyEyKnrpnfqPR8kySb4jIv1qWU1Z3KIaUKjom4wzco0Ck8BywQiB-fedr3uu~ArIIUD2mWGtJHvlQuQYFlmbuBU2nRYjYRvdZ0Bwj73uCUrhBwcnFAuMetnnXadV5jIZVWCz2jEbR-tOKcvx1SICWyqZDwCgs9oqlmw9Q7-sYYRfG6Ut8mb1u-8bckdoK~SZqBUjrAC2-HGc0DF7mAveJfDVTXufP2jKciHTgXp5bMjKD-ZweKJu8tQOsAt84IsU1vnM-nbGVNdfKnLkV~Qli0FbqsPSdzksg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>  
            </BoxIllustration>
            <Text>The Pet Walk app is designed for taking care of your pet. Fixe objectives based on their needs. See their progresses and share them with the community.</Text>
            <Button>Let's start</Button>
        </Container>
    )
}

export default Welcome;