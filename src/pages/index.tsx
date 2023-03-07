import dynamic from 'next/dynamic'
import Image from 'next/image'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

import DvrIcon from '@mui/icons-material/Dvr'
import HandymanIcon from '@mui/icons-material/Handyman'
import ReportProblemIcon from '@mui/icons-material/ReportProblem'

const Errors = dynamic(() => import('@/components/Errors'))
const Steps = dynamic(() => import('@/components/Steps'))
const Tools = dynamic(() => import('@/components/Tools'))

export default function Home() {
  return (
    <>
      <Box sx={{
        minHeight: '40vh',
        pt: '15vh',
        textAlign: 'center',
      }}>
        <Typography component="h1" variant="h1" color="primary" sx={{ ml: '1rem', mr: '1rem' }}>
          {`Comment résoudre un conflit ?`}
        </Typography>
        <Typography component="p" variant="subtitle1" color="primary" sx={{ ml: '1rem', mr: '1rem' }}>
        {`Vous avez un conflit avec une personne, un groupe, une organisation, un système ? Vous ne savez pas comment le résoudre ? Vous êtes au bon endroit !`}
        </Typography>
      </Box>

      <Box>
        <Paper id="steps" elevation={0} sx={{ p: "2rem" }}>
          <Typography component="h2" variant="h2">
            <DvrIcon sx={{ mr: '1rem', fontSize: '2.25rem' }} />
            {`Les étapes pour résoudre un conflit`}
          </Typography>

          <Grid container spacing={2} sx={{ p: '2rem' }} alignItems='center' justifyContent='center'>
            <Grid item xs={12} md={6} sx={{ p: '2rem' }}>
              <Image src="/img/route.jpg" alt="Image illustrant les étapes pour résoudre les conflits" title="Image illustrant les étapes pour résoudre les conflits" fill className={'image-relative'} loading='lazy'/>
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: '2rem' }}>
              <Steps />
            </Grid>
          </Grid>
        </Paper>

        <Box sx={{ m: "1rem" }}></Box>

        <Paper id="tools" elevation={0} sx={{ p: "2rem", backgroundColor: "transparent" }}>
          <Typography component="h2" variant="h2">
            <HandymanIcon sx={{ mr: '1rem', fontSize: '2.25rem' }} />
            {`Les outils idéals`}
          </Typography>

          <Box sx={{ p: '2rem' }}>
            <Paper sx={{ p: { xs: '1rem', md: '2rem' }, backgroundColor: "transparent" }}>
              <Typography component="p" variant="body1">
              {`Vous avez besoin d'aide pour résoudre votre conflit ? Vous pouvez utiliser les outils suivants :`}
              </Typography>
              <Tools />
            </Paper>
          </Box>
        </Paper>

        <Box sx={{ m: "1rem" }}></Box>

        <Paper id="errors" elevation={0} sx={{ p: "2rem" }}>
          <Typography component="h2" variant="h2">
            <ReportProblemIcon sx={{ mr: '1rem', fontSize: '2.25rem' }} />
            {`Les erreurs à éviter`}
          </Typography>

          <Grid container spacing={2} sx={{ p: '2rem' }} alignItems='center' justifyContent='center'>
            <Grid item xs={12} md={6}>
              <Image src="/img/gestion_conflit.jpg" alt="Image illustrant les erreurs à éviter lors d'un conflit" title="Image illustrant les erreurs à éviter lors d'un conflit" fill className={'image-relative'} loading='lazy' />
            </Grid>
            <Grid item xs={12} md={6}>
              <Errors />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  )
}
