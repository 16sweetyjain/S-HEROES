import React,{useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './features.css'

const quest = [
    "Should I be worried about my vaginal odor?",
    "How often should I get a pelvic exam?",
    "If I have pain during sex, is there something wrong?",
    "Why is my period so heavy?",
    "Does vaginal discharge mean something is wrong?",
    "Is it OK to have sex while I am pregnant?",
    "How do I know when menopause starts?",
    "I've never had an orgasm. Is that normal?"
]

const ans = [
    "Vaginas have a natural smell, but odors don’t necessarily mean there is something wrong. Fishy smells may indicate bacterial infection, and a bread-like smell may point to a yeast infection, but other odors don’t always signal a problem.",
    "The American College of Obstetricians and Gynecologists (ACOG) recommends women 21 years old and older have a yearly pelvic exam.",
    "Some women experience pain during intercourse because of benign reasons, such as lack of lubrication. Other times, the pain might signal that there is something more serious going on, such as ovarian cysts or endometriosis, according to ACOG.",
    "Periods are different for each person. They normally last up to eight days, according to ACOG, but if yours lasts longer than that or you think it is heavier than what is normal for you, you should consult your doctor.",
    "As with vaginal odors, some vaginal discharges are normal and can signal that your vagina is healthy. However, if you notice an increased amount of discharge, experience itching or burning along with the discharge, you should talk to your doctor. ",
    "Most women can safely enjoy sex during their pregnancy. During pregnancy, you develop a cervical mucus plug which protects the baby from anything that enters the vagina.",
    "Menopause is confirmed when you have not had your period for 12 consecutive months, according to the North American Menopause Society. The average age is around 51.",
    "Orgasm problems are the second most reported sexual problem, according to an article in Annual Review of Sex Research. Between 4 and 7 percent of women have women’s orgasmic disorder."
]

export default function Awareness(){

    

    return (

        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
            >
            <h4 className="heading">Frequently Asked Questions</h4>
            <Grid className='row-wrap' item xs={30}>
                {quest.map((x, index) => (
                 <Card className="card5 row-wrap">{x} 
                 <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom>
                           {ans[index]}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
                ))}
            </Grid> 
        </Grid> 
    )
}