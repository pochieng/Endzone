using System;
using System.Web.Mvc;
using Endzone.MVC.Models;
using Endzone.MVC.Infrastructure;

namespace Endzone.MVC.Controller
{
    public class ContactSurfaceController : Umbraco.Web.Mvc.SurfaceController
    {
        [HttpPost]
        [ValidateInput(false)]
        public ActionResult SendContact(ContactModel model)
        {
            if (!ModelState.IsValid)
            {
                return CurrentUmbracoPage();
            }


            var emailSubject = "Goring enquiry";
            var emailTo = Helper.GetPropertyValueByIdAndAlias(1142, "emailTo");
            var emailFrom = Helper.GetPropertyValueByIdAndAlias(1142, "emailFrom");
            var emailBody = "<p>Name:" + model.Name + "</p>";
            emailBody += "<p>Phone number: " + model.TelephoneNumber + "</p>";
            emailBody += "<p>Email address: " + model.Email + "</p>";
            emailBody += "<p>" + model.Message + "</p>";

            try
            {
                Helper.SendMail(emailFrom, emailTo, emailSubject, emailBody);
            }
            catch (Exception ex)
            {
                ViewBag.Message = ex.Message.ToString();
                return CurrentUmbracoPage();
            }

            return Redirect("/contact-us/thank-you/");

        }

    }
}
