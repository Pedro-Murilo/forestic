import styled from 'styled-components';

const Section = styled.section`

`

const Container = styled.div`

`

const Hero = () => {
    return (
        <Section>
            <Container>
                <h1>Title</h1>
                <p>Description</p>
                <button>See more</button>
            </Container>
        </Section>
    )
}

export default Hero;