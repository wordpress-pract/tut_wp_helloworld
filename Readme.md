users:
    admin/123qwe!@#QWE

Features:
    Build worldpress from scratch with docker
        Mapping:
            wp-content

    Customs theme


Basic comments:
    # Run the container in detached mode
    docker-compose up --detach
    
    # Run an optional test shell command on the wordpress container
    docker-compose exec wordpress ls
    
    # Delete the wp-config.php
    docker-compose exec wordpress rm wp-config.php
    
    # Restart the container to generate a new wp-config.php
    docker-compose down && docker-compose up --detach
    
    # View the content of the new wp-config.php
    docker-compose exec wordpress cat wp-config.php

    # More detail
    https://itproguru.com/expert/2017/02/how-to-connect-and-edit-configuration-files-for-wordpress-running-on-linux-in-a-docker-container-includes-changing-site-url/
