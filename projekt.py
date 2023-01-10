import graphviz

# Skonstruować automat skończony nie-deterministyczny akceptujący język nad
# alfabetem AB którego słowa są zakończone sekwencją ‘BBAA’

dot = graphviz.Digraph(comment="projekt")
dot.node('db0', 'q0', shape='circle')
dot.node('db1', 'q1', shape='circle')
dot.node('db2', 'q2', shape='circle')
dot.node('db3', 'q3', shape='circle')
dot.node('db4', 'q4', shape='doublecircle')
dot.edge('db0', 'db1', label='b')
dot.edge('db1', 'db2', label='b')
dot.edge('db2', 'db3', label='a')
dot.edge('db3', 'db4', label='a')
dot.edge('db0', 'db0', label='a,b')

print(dot)
dot.view()
