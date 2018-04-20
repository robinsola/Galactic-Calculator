import { Age } from './calc';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("#calculator").submit(function(event) {
    event.preventDefault();

    let inputBirth = $("#birthdate").val();
    let lifeExpectAge = parseInt($("#life-expectancy").val());
    let newAge = new Age(inputBirth, lifeExpectAge);

    $(".output").text("You are " + newAge.exactSeconds() + " seconds old.")

  });
});
