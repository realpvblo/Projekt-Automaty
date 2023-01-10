import graphviz

# Skonstruować automat skończony nie-deterministyczny akceptujący język nad
# alfabetem AB którego słowa są zakończone sekwencją ‘BBAA’

dot = graphviz.Digraph(comment="projekt")
# dot.node('db0', 'q0', shape='circle')
# dot.node('db1', 'q1', shape='circle')
# dot.node('db2', 'q2', shape='circle')
# dot.node('db3', 'q3', shape='circle')
# dot.node('db4', 'q4', shape='doublecircle')
# dot.edge('db0', 'db1', label='b')
# dot.edge('db1', 'db2', label='b')
# dot.edge('db2', 'db3', label='a')
# dot.edge('db3', 'db4', label='a')
# dot.edge('db0', 'db0', label='a,b')

# Skonstruować automat skończony deterministyczny akceptujący liczby 
# naturalne podzielne przez 3

dot.node('q0', 'q0', shape = 'doublecircle')
dot.node('q2', 'q2', shape = 'circle')
dot.node('q1', 'q1', shape = 'circle')

dot.edge('q0', 'q1', label='1,4,7')
dot.edge('q1', 'q0', label='2,5,8')

dot.edge('q0', 'q2', label='2,5,8')
dot.edge('q2', 'q0', label='1,4,7')

dot.edge('q1', 'q2', label='2,5,8')
dot.edge('q2', 'q1', label='1,4,7')

dot.edge('q0', 'q0', label='0,3,6,9')
dot.edge('q1', 'q1', label='0,3,6,9')
dot.edge('q2', 'q2', label='0,3,6,9')

print(dot)
dot.view()
