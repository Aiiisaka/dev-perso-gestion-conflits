import { useState } from 'react';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
    {
        label: 'Identifier le conflit',
        description: `La première étape consiste à identifier le conflit et à comprendre les problèmes sous-jacents. Il est important de prendre le temps d'écouter toutes les parties impliquées et de comprendre leurs points de vue.`,
        example: `Deux amis, Sarah et Tom, se disputent à propos de la musique qu'ils veulent écouter pendant leur voyage en voiture. Sarah préfère la musique pop, tandis que Tom préfère la musique rock.`
    },
    {
        label: 'Comprendre les positions et les intérêts de chacun',
        description: `Il est essentiel de comprendre les positions et les intérêts de toutes les parties impliquées. Les positions sont les points de vue de chacun sur le conflit, tandis que les intérêts sont les raisons sous-jacentes qui motivent chaque partie.`,
        example: `Sarah et Tom discutent de leurs goûts musicaux et réalisent qu'ils ont des raisons personnelles pour préférer leur type de musique. Sarah préfère la pop car elle la trouve plus entraînante et joyeuse, tandis que Tom préfère le rock car il l'aide à se concentrer sur la route.`
    },
    {
        label: 'Évaluer les options de résolution',
        description: `Après avoir compris les positions et les intérêts de chacun, il est temps de générer des options de résolution. Il est important de considérer toutes les options possibles, même celles qui semblent peu pratiques ou irréalistes.`,
        example: `Sarah et Tom proposent des compromis, comme écouter un peu de chaque type de musique ou choisir une playlist avec des genres variés. Ils considèrent également d'autres options, comme écouter un podcast ou un livre audio.`
    },
    {
        label: 'Choisir la meilleure option',
        description: `Après avoir évalué toutes les options, il est temps de choisir la solution la plus adaptée. Il est important que toutes les parties impliquées soient d'accord avec la solution choisie.`,
        example: `Finalement, Sarah et Tom décident de choisir une playlist qui alterne entre les genres de musique qu'ils aiment tous les deux. Ils décident également de faire une pause en cours de route pour écouter un podcast qu'ils ont tous les deux envie d'écouter.`
    },
    {
        label: 'Appliquer la solution',
        description: `La dernière étape consiste à mettre en place la solution choisie. Il est important de déterminer un plan d'action concret pour la mise en place de la solution, ainsi que de surveiller la situation pour s'assurer que la solution fonctionne correctement.`,
        example: `Sarah et Tom mettent leur playlist en marche et écoutent leur musique préférée tout en profitant de leur voyage en voiture.`
    },
];

export default function Steps() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ maxWidth: 600 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel
                            optional={
                                index === 4 ? (
                                    <Typography variant="caption">Dernière étape</Typography>
                                ) : null
                            }
                        >
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            <Typography>
                                {step.description}
                            </Typography>
                            <Typography sx={{ mt: 2 }}>
                                <Box component="span" sx={{ fontWeight: 'bold' }}>
                                    Exemple : <br></br>
                                </Box>
                                {step.example}
                            </Typography>
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps.length - 1 ? 'Finir' : 'Continuer'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        Retour en arrière
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>Vous avez fini de résoudre votre conflit !</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Recommencer
                    </Button>
                </Paper>
            )}
        </Box>
    )
}