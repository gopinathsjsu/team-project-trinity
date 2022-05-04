module.exports =app =>{


    //Get all reservations for user
    app.get("user/reservations",reservation.getReservationAll);

    //Get reservation by id
    app.get("users/reservations/:id",reservation.getReservation);

    //Edit reservation
    app.put("user/reservations/:id",reservation.editReservation);

    
    //Cancel reservations
    app.delete("users/reservations/:id", reservation.cancelReservation)

}