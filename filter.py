with open("CO2.csv") as f:

    out = open("out.csv", "wb")

    for line in f.readlines():
        l = line.split(",")
        place = l[2]
        print "place %s" % place
        year = l[1] 
        print "year %s" % year
        if "China" in line:
            ec = l[3]
            out.write(line)
        elif "United States" in line:
            eu = l[3]
            out.write(line)
        elif "World" in line:
            ind = l[0]
            ew = float(l[3]) - float(ec) - float(eu)
            print ("%s,%s,World,%s" % (ind, year, ew))
            out.write("%s,%s,World,%s\n" % (ind, year, ew))
