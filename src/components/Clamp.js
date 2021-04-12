import React from 'react'
import { Text } from "../styles/typo"
import { Container, Divider } from "../styles/layout"

function Clamp () {
    return (
        <Container full dark>
            <Divider large />
            <Container>
                <Text header middle uppercase bold light wide center>Truncates text at three lines</Text>
                <Divider small />
                <Text clamp bold light wide center>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet non nesciunt facere earum enim voluptas harum quia numquam veritatis reiciendis eaque ad impedit distinctio aspernatur quod similique saepe, nulla omnis aperiam repudiandae, delectus autem consectetur reprehenderit. Cumque saepe dolore, accusamus quidem rerum quia eaque! Alias illum voluptatibus vitae, cum dicta blanditiis iusto? Perferendis aperiam eveniet eaque nemo, consequuntur aspernatur sunt consectetur possimus, quia sit laudantium quo eum deleniti aliquid facilis quibusdam velit. Nostrum, at, fugiat, minima distinctio facilis amet facere animi illo accusantium qui non debitis possimus aut nulla? Nisi quae accusamus numquam voluptatibus optio quas omnis. Reprehenderit atque ullam quidem labore facilis at ducimus tempora impedit modi iure. Tempora maxime architecto numquam voluptatibus, similique voluptate sequi quas ad, quidem, temporibus saepe perspiciatis neque iste quisquam modi commodi maiores. Pariatur, velit est. Et possimus aliquid totam necessitatibus ratione tempore officiis beatae fugit accusamus error, rem id ab fugiat temporibus veniam velit ipsum sequi neque consequuntur illo mollitia aut soluta! Quo deserunt omnis aspernatur praesentium est excepturi sapiente aliquid dolores aperiam adipisci modi ad, accusantium provident architecto iusto temporibus a unde cumque possimus magni vero quaerat fugiat?</Text>
            </Container>
            <Divider large />
        </Container>
    )
}

export default Clamp