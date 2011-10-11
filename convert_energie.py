#
#  Quick and dirty data converter
#  created at make.opendata.ch 2011
#
from couchdbkit import *
from couchdbkit.loaders import FileSystemDocsLoader
from uuid import uuid4
import datetime
import time
import csv
import os
import unicodedata

# define the data fields we will keep
class Batiment(Document):
  EGID = IntegerProperty()
  ANNEE = IntegerProperty()
  IDE_TOT_MJ = FloatProperty()
  COORDX = IntegerProperty()
  COORDY = IntegerProperty()
  NOM_LONG = StringProperty()

def csv_to_couch_dump():
  # read the file
  csvReader = csv.reader(open('csv/utf8/energieParBatiment_lsne.csv', 'rU'), delimiter=',', quotechar='|')

  # create database
  server = Server()
  db = server.get_or_create_db("energie-lausanne")
  
  # init the object  
  Batiment.set_db(db)

  i = 0
  for col in csvReader:
    # skip header or empty data
    if col[1] == "ANNEE" or col[12] == "" or col[28] == "0":
      continue

    # save the building object
    batiment = Batiment(
      ANNEE = int(col[1]),
      EGID = int(col[2]),
#      IDE_CH_MJ = float(col[8]),
#      IDE_CH_KWH = float(col[9]),
#      GWP_CH = float(col[10]),
      IDE_TOT_MJ = float(col[12]),
#      IDE_TOT_KWH = float(col[13]),
#      GWP_TOT = float(col[14]),
      NOM_LONG = unicode(col[23], 'utf-8'),
      COORDX = int(col[15]),
      COORDY = int(col[16])
    )      
    # ENERGIE_ID = int(col[0]), # Cle
    # ANNEE = int(col[1]), # Annee
    # EGID = int(col[2]), # Batiment id
    # Q_ELEC = float(col[3]), # Quantite d'electricite [kWh]
    # Q_EAU = float(col[4]), # Quantite d'eau (vide)
    # Q_GAZ = float(col[5]), # Quantite de gaz [kWh]
    # Q_CAD = float(col[6]), # Quantite de chauffage a distance [kWh]
    # Q_MAZOUT = float(col[7]), # Quantite de mazout => vide
    # IDE_CH_MJ = float(col[8]), # IDE (MJ/m2.an), depense energetique chauffage (gaz + cad)
    # IDE_CH_KWH = float(col[9]), # IDE (kWh/m2.an), IDE = Indice de depense energetique
    # GWP_CH = float(col[10]), # Quantite de CO2 [kgCO2/m2.an] emise pour chauffage (gaz+cad)
    # IDE_TOT_MJ = float(col[11]) # IDE (MJ/m2.an), IDE = Indice de depense energetique chauffage et electricite
    # IDE_TOT_KWH = float(col[12]), # IDE (kWh/m2.an), IDE = Indice de depense energetique
    # GWP_TOT = float(col[13]), # Quantite de CO2 [kgCO2/m2.an] emise pour chauffage  et electricite
    # COORDX = float(col[14]), # Coordonnees nationales X
    # COORDY = float(col[15]), # Coordonnees nationales Y
    # GAREA = int(col[16]), # Surface au sol du batiment [m2]
    # GASTW = int(col[17]), # Nombre de niveaux
    # DSTR = unicode(col[18]), # Nom de la rue (nom long)
    # DEINR = int(col[19]), # Numero de rue
    # PLZ4 = int(col[20]), # numero postal
    # PLZZ = unicode(col[21]), # complement du numero de postal
    # NOM_LONG = unicode(col[23], 'utf-8'), # Nom long de la rue
    # NOM_COURT = unicode(col[24], 'utf-8'), # Nom court de la rue
    # SURF_LOGEMENTS = int(col[25]), # Somme des surfaces des logements
    # SURF_NOMINALE = int(col[26]), # max entre GAREA*GASTW et SURF_LOGEMENTS
    # SURF_REFERENCE = float(col[27]), # SURF_NOMINALE / 0.8
    # LONGITUDE = float(col[28]), # longitude
    # LATITUDE = float(col[29]), # latitude

    batiment.save()
    i = i + 1

    # comment out these two lines to grab all data (30 min on my machine..)
    if i == 1000:
      break

  print i

csv_to_couch_dump()

