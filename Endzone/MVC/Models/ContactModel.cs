using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web.Mvc;
using Endzone.MVC.Models;

namespace Endzone.MVC.Models
{
    public class ContactModel
    {
        [Required]
        [Display(Name = "Resort")]
        public string Resort { get; set; }

        [Required]
        [Display(Name = "Reference Number")]
        public string RefNumber { get; set; }

        [Required]
        [Display(Name = "Name")]
        public string Name { get; set; }

        [Display(Name = "Date of Last Visit")]
        public DateTime? DateOfLastVisit { get; set; }

        [Display(Name = "Arrival Date")]
        public DateTime? ArrivalDate { get; set; }

        [Display(Name = "Est Time of Arrival")]
        public DateTime? EstTimeOfArrival { get; set; }

        [Display(Name = "Departure Date")]
        public DateTime? DepartureDate { get; set; }

        [Required]
        [Display(Name = "Telephone Number")]
        public string TelephoneNumber { get; set; }

        [Display(Name = "Best time to call")]
        public string BestTimeToCall { get; set; }

        [Required]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        [Display(Name = "Email Address")]
        public string Email { get; set; }

        [Display(Name = "If there are other guests in your group, please let us now their names (for groups of 10 or more please contact us directly at (reservations@champneys.com)")]
        public string Message { get; set; }

        [Display(Name = "If you have already completed a Guest Request Form for this visit please tick here")]
        public bool Visited { get; set; }

        [Display(Name = "If you are staying overnight with us would you like")]
        public string RoomType { get; set; }
    }
}