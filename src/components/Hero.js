import styled from 'styled-components';

const Section = styled.section`
    background: url(${({ image }) => image && image}) center;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin-top: -60px;
`

const Container = styled.div`
    color: #f4f4f4;
    padding: 2rem;
    backdrop-filter: blur(15px);
    background-color: rgba(0, 0, 0, 0.3);
    margin: 2rem;
    border-radius: 5px;

    h1 {
        font-size: clamp(2rem, 8vw, 5rem);
        margin-bottom: 0.5rem;
    }

    p {
        font-size: clamp(1rem, 6vw, 2.5rem);
        margin-bottom: 1rem;
    }

    button {
        font-size: clamp(0.8rem, 4vw, 1.2rem);
        padding: 0.8rem 2rem;
        color: #222;
        background: #00FFAD;
        background: linear-gradient(to right, #00A847, #00CE56);
        border: none;
        border-radius: 4px;
        cursor: pointer;
        outline: none;
    }
`

const Hero = ({ image, title, description }) => {
    return (
        <Section image={image}>
            <Container>
                <h1>{title}</h1>
                <p>{description}</p>
                <button>See more</button>
            </Container>
        </Section>
    )
}

export default Hero;