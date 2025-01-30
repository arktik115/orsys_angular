répertoire parent de plein d'app TPs
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Important pour faire marcher le projet:
# Lancer le server mock (le projet orysis_angular/data/)
$ npx json-server@0.17 todos.json --watch --delay 500 --port 5000

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# Ajouter un raccourci clavier sur vsCode

clavier: ctrl+shift+p
sélectionner : configurer des extraits de code
taper : typescript.json
ajouter un raccourci clavier ☺☺☺☺☺
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Pourquoi les modules ont été supprimés:

providers => Permettent de déclarer des services dans les modules avec certains parametres

les providers sont liés à un seul module, du coup, si plusieurs modules existent et utilisent le même service,
ces instances de services ne sont pas identiques (2 instances et pas une)

=> Du coup, c'était chiant, autant factoriser tous les services dans le root
==> Du coup, plus besoin de module, tout est en standalone

schema en arboresence:
	root
	- Module1
	-- InjectorModule1 => Permet d'instancier les services 1 et 2
	- Module2
	-- InjectorModule2 => Permet d'instancier les services 1 et 2
	- Service1
	- Service2
	- InjectorRoot => Permet d'instancier les services

=> Problème, Module1.service1 != Module2.service1

==> Du coup, autant utiliser l'injector du Root pour que tout soit partagé entre modules
==> Du coup, autant supprimer tous les modules et tout mettre en standalone
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

