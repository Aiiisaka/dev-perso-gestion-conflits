import Grid from '@mui/material/Grid'

import Tool from './Tool'

const tools = [
    {
        img: '/img/communication.jpg',
        tool: 'Communication non-violente',
        subheader: `Formuler ses besoins de manière constructive`,
        description: `L'exercice de l'observation permet de différencier les faits des interprétations et de formuler des demandes claires. Il consiste à décrire de manière factuelle une situation et à exprimer son ressenti et ses besoins de manière non-jugeante. `,
        example: `Quand tu ne réponds pas à mes messages, je me sens ignoré et j'ai besoin de savoir si tu es d'accord pour discuter de ce sujet avec moi`
    },
    {

        img: '/img/formulation.jpg',
        tool: 'Reformulation',
        subheader: `Comprendre l'autre pour mieux résoudre le conflit`,
        description: `L'exercice de la reformulation consiste à répéter ce que l'autre partie vient de dire en utilisant ses propres mots pour s'assurer que l'on a bien compris son point de vue.`,
        example: `Si je comprends bien, tu es en colère parce que je n'ai pas respecté notre accord.`
    },
    {
        img: '/img/emotions.jpg',
        tool: 'Gestion des émotions',
        subheader: `Prendre du recul pour mieux gérer ses émotions`,
        description: `L'exercice de la respiration consciente permet de prendre du recul sur ses émotions et de les exprimer de manière constructive. Il consiste à prendre quelques respirations profondes pour se calmer et à exprimer son ressenti de manière non-violente et constructive.`,
        example: `Je me sens frustré par la situation, mais je suis ouvert à trouver une solution ensemble.`
    },
]


export default function Tools() {
    return (
        <Grid container spacing={2} sx={{ p: { xs: '0', md: '2rem' } }}>
            {tools.map((tool, index) => (
                <Grid item xs={12} md={4} key={index}>
                    <Tool value={tool} />
                </Grid>
            ))}
        </Grid>
    )
}