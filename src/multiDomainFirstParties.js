/**
 * Some thoughts about how to handle multi domain first parites.
 * Given a data strucutre like the one below we could implement the following 
 * pseudo code.
 * function isMultiDomainFirstParty(domain1, domain2):
 *   for list in multiDomainFirstPartiesArray:  // the below data structure
 *     if list.contains(domain1) and list.contains(domain2):
 *       return true
 *   return false
 *
 *   This list should be manually curated but could be generated by crawlilng
 *   whois data, DNT data, certificate info, etc. 
 **/ 
[
  ["google.com", "youtube.com", "gstatic.com", "googleapis.com", "googleusercontent.com"],
  ["facebook.com", "fbcdn.com", "facebook.net"],
  ["newyorktimes.com", "nyt.com"],
  ["yahooapis.com", "yimg.com", "yahoo.com"],
  ["dummy"]
]
