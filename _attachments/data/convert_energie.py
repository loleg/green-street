from couchdbkit import *
from couchdbkit.loaders import FileSystemDocsLoader
from uuid import uuid4
import datetime
import time
import csv

#from sqlalchemy import *
#from sqlalchemy.orm import mapper
import os
import unicodedata

class Batiment(Document):
  EGID = IntegerProperty()
  ANNEE = IntegerProperty()
  IDE_CH_MJ = FloatProperty()
  IDE_CH_KWH = FloatProperty()
  GWP_CH = FloatProperty()
  IDE_TOT_MJ = FloatProperty()
  IDE_TOT_KWH = FloatProperty()
  GWP_TOT = FloatProperty()
  LONGITUDE = FloatProperty()
  LATITUDE = FloatProperty()
  NOM_LONG = StringProperty()

def csv_to_couch_dump():
  # read the file
  csvReader = csv.reader(open('csv/utf8/energieParBatiment_lsne.csv', 'rU'), delimiter=',', quotechar='|')

  # create database
  server = Server()
  db = server.get_or_create_db("energie-batiments")
  
  # init the object<  
  Batiment.set_db(db)

  i = 0
  for col in csvReader:
    # skip header
    if col[1] == "ANNEE" or col[11] == "" or col[28] == "0" or col[29] == "0" or col[23] == "":
      continue

    # save the building object
    batiment = Batiment(
      ANNEE = int(col[1]),
      EGID = int(col[2]),
      IDE_CH_MJ = float(col[8]),
      IDE_CH_KWH = float(col[9]),
      GWP_CH = float(col[11]),
      IDE_TOT_MJ = float(col[12]),
      IDE_TOT_KWH = float(col[13]),
      GWP_TOT = float(col[14]),
      NOM_LONG = unicode(col[23], 'utf-8'),
      LONGITUDE = float(col[28]),
      LATITUDE = float(col[29])
    )

    batiment.save()
    i = i + 1
    if i == 1000:
      break

  print i

csv_to_couch_dump()

