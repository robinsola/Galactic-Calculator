import { Age } from './calc';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("#calculator").submit(function(event) {
    event.preventDefault();
    let userName = $("#user-name").val();
    let inputBirth = $("#birthdate").val();
    let lifeExpectAge = parseInt($("#life-expectancy").val());
    let newAge = new Age(inputBirth, lifeExpectAge);
    newAge.ageTimer();
    $(".wrapper").hide();
    $(".timer").show();
    $(".output").show();
    setInterval(() => {
      $("#timer").text(newAge.counter)
    }, 1000);
    $(".name-output").text(userName);
    $(".earth-age").text(newAge.earthYears());
    $(".mercury-age").text(newAge.mercuryYears());
    $(".venus-age").text(newAge.venusYears());
    $(".jupiter-age").text(newAge.jupiterYears());
    $(".earth-death").text(lifeExpectAge - newAge.earthAge);
    $(".mercury-death").text(newAge.mercuryDeath());
    $(".venus-death").text(newAge.venusDeath());
    $(".jupiter-death").text(newAge.jupiterDeath());
  });
});
