using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Configuration;
using System.Net.Mail;
using System.Web;
using umbraco;
using Umbraco.Core;

namespace Endzone.MVC.Infrastructure
{
    public static class Helper
    {
        public static void SendMail(string mailfrom, string mailto, string mailSubject, string mailBody)
        {
            library.SendMail(mailfrom, mailto, mailSubject, EmailTemplate(mailBody), true);
        }

        public static void SendMailWithAttachment(string mailfrom, string mailto, string mailSubject, string mailBody, System.Net.Mail.Attachment attach)
        {
            try
            {
                var smtpSec = (SmtpSection)ConfigurationManager.GetSection("system.net/mailSettings/smtp");

                if (smtpSec == null) return;

                var mySmtpClient = new SmtpClient(smtpSec.Network.Host);
                mySmtpClient.Credentials = new NetworkCredential(smtpSec.Network.UserName, smtpSec.Network.Password);
                var msg = new MailMessage
                {
                    IsBodyHtml = true,
                    Body = EmailTemplate(mailBody),
                    From = new MailAddress(mailfrom),
                    Subject = mailSubject,

                };

                //add attachement
                msg.Attachments.Add(attach);
                msg.To.Add(mailto);
                mySmtpClient.Send(msg);
            }
            catch (Exception e)
            {

            }
        }

        public static string EmailTemplate(string emailMessage)
        {
            using (var sr = System.IO.File.OpenText(HttpContext.Current.Server.MapPath(@"~/config/emailtemplates/main.txt")))
            {
                var sb = sr.ReadToEnd();
                sr.Close();
                sb = sb.Replace("#CONTENT#", emailMessage);
                return sb;
            }
        }

        public static string GetPropertyValueByIdAndAlias(int id,string alias)
        {
            var cs = ApplicationContext.Current.Services.ContentService;
            var contactNode = cs.GetById(id);
            var emailFrom = contactNode.GetValue(alias).ToString();

            return emailFrom;
        }
    }
}