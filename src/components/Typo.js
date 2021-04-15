import React from 'react'
import { Text } from "../styles/typo"
import { Container, Divider } from "../styles/layout"
import { Link } from "../styles/typo"

function Typo () {
    return (
        <Container>
            <Divider large />
            <Divider large />
            <Text header large bold colored wide>Fully Responsive Typography</Text>
            <Divider />
            <Text header huge bold dark wide>Huge h1</Text>
            <Text header large bold dark wide>Large h2</Text>
            <Text header middle bold dark wide>Middle h3</Text>
            <Text header dark bold wide>Normal h4</Text>
            <Divider />
            <Text header middle dark bold wide>Subtitle</Text>
            <Text dark justify>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cum explicabo quia laudantium nam, reprehenderit reiciendis commodi, placeat iste beatae velit obcaecati vitae inventore ad delectus asperiores est modi corporis nobis id voluptatibus fugiat libero sequi qui. Ullam architecto sed dolores repudiandae, sunt illum neque debitis nisi maiores nesciunt incidunt labore doloremque dicta eveniet nemo velit quis inventore accusamus quisquam ex ab. Dignissimos dolorum voluptatum delectus laudantium! Inventore atque nam quibusdam non consequuntur iste vel mollitia rem est laudantium expedita vero quidem illo delectus aliquid eius asperiores quaerat eum, sunt deleniti accusantium odit laborum ipsam cumque. Iste rerum repellat veritatis!</Text>
            <Divider small />
            <Text blocknote justify>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, labore distinctio animi libero eaque cupiditate, assumenda illo, perferendis quo eos totam enim quisquam iusto inventore atque? Sint quibusdam dicta temporibus magnam cum labore! Eligendi consectetur dicta repudiandae. Id, assumenda? Inventore delectus similique officiis aspernatur repellendus quia, officia veritatis assumenda iste recusandae quaerat error commodi ex. Sunt illum voluptas animi labore voluptate! Natus dignissimos cupiditate minus deleniti eaque hic ducimus esse?</Text>
            <Divider small />
            <Text dark justify>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus obcaecati modi provident exercitationem deserunt, temporibus assumenda quaerat quos ipsam pariatur harum beatae expedita omnis repellat recusandae error nobis suscipit non ea sunt? Ad temporibus ipsam eligendi placeat ab dolor eius voluptates nostrum rerum iusto molestias unde repellendus in, aperiam sunt facilis veniam similique minima cumque quam soluta accusamus illo non ratione. Tempore consequatur nemo amet accusamus rem error tenetur excepturi cumque facilis cupiditate! Ut laboriosam fugit facilis quos quae magnam fugiat, ducimus magni nesciunt autem, rem doloremque. Minus doloribus ipsam eligendi repellendus eos eum sapiente dolorum. Velit nihil beatae magni.</Text>
            <Divider small />
            <Link colored bold href= "#">Just a simple link.</Link>
            <Divider small />
            <Link colored bold animated href= "#">Animated link.</Link>
        </Container>
    )
}

export default Typo
