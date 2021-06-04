import React from 'react';
import Footer from '../Component/Footer';
import Header from '../Component/Header';
import team1 from '../images/team1.jpeg';
import team2 from '../images/team2.jpg';
import team3 from '../images/team3.jpg';
import team4 from '../images/team4.jpg';
import './StyleSheet.css';


function Mastera() {
    return (
        <div>
            <Header />
            <Master />
            <Footer />
        </div>
    )
}

function Master() {
    return (
        <>
            <section class="team">
                <h1>Мастера</h1>
                <div class="container">
                    <div class="team_inner">

                        <div class="team_item">
                            <img class="team_photo" src={team1}/> 
                            <div class="team_name">Елизавета</div>
                            <div class="team_text">Дипломированный кинолог. Елизавета с легкостью справляется с самыми
                            крошечными и самыми большими четвероногими друзьями.</div>
                        </div>

                        <div class="team_item">
                            <img class="team_photo"src={team2}/>
                            <div class="team_name">Алена</div>
                            <div class="team_text">Выпускница Московской школы груминга. Всегда находит подход даже к самым
                            строптивым клиентам!</div>
                        </div>

                        <div class="team_item">
                            <img class="team_photo" src={team3}/>
                            <div class="team_name">Ольга</div>
                            <div class="team_text">Ольга закончила Московскую школу груминга. Она очень любит животных и
                            ответственно подходит к работе.</div>
                        </div>
                        <div class="team_item">
                            <img class="team_photo" src={team4}/>
                            <div class="team_name">Анастасия</div>
                            <div class="team_text">Закончила Московскую школу груминга. В ее нежных и добрых руках собакам
                            уютно и комфортно.</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Mastera;
