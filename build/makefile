
UI_DIR=../mlc_resume


# Pretty Decorators for Build
BLACK='\033[1;30m'       # Black
RED='\033[1;31m'         # Red
GREEN='\033[1;32m'       # Green
YELLOW='\033[1;33m'      # Yellow
BLUE='\033[1;34m'        # Blue
PURPLE='\033[1;35m'      # Purple
CYAN='\033[1;36m'        # Cyan
WHITE='\033[1;37m'       # White
NC='\033[0m' 			 # No Color


define ECHO_BUILD
	@echo -e $(YELLOW)$1$(NC)
endef

define ECHO_ERROR
	@echo -e $(RED)$1$(NC)
endef

define ECHO_INFO
	@echo -e $(BLUE)$1$(NC)
endef

define ECHO_OK
	@echo -e $(GREEN)$1$(NC)
endef


.PHONY: dev
dev:
	$(call ECHO_BUILD,"\n** Building $@.")

	cd $(UI_DIR) && npm start

	$(call ECHO_OK,"\n** Finished building $@.")