import time
from selenium import webdriver
 
driver = webdriver.Firefox()
driver.get("https://www.realestate.com.au/buy/in-st+kilda,+vic+3182/list-1")
print(driver.page_source)