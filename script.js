/*********************************************
 * Performing Dragging of a modal
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *******************************************/


    // DEFINITIONS

        let genMenuModalBdr;
        let genMenuModalBox;
        let genMenuModalCtntBdr;
        let genMenuModalDisplayThreshold = 5;
        let genAtnModalBoxDragDist = 10;
        let genMenuModalIsDragging = false;
        let genMenuBoxStartY = 0;
        let genMenuBoxThreshold = 64;
        let startGenMenuBoxHeight = 0;
        let currGenMenuBoxHeight = 0;
        let genMenuModalBoxHeightTimer;
        const genMenuModalBdrStruct = 
        `
            <div class="genMenuModalBcg"></div>
        `;
        const genMenuModalBoxStruct = 
        `
            <div class="genMenuModalDragHandleBdr">
                <div class="genMenuModalDragHandleBox">
                    <div class="genMenuModalDragHandleIcon"></div>
                </div>
            </div>
        `;
        const genMenuModalCtntBdrStruct = 
        `
            <div class="genMenuModalCtntBox">
                <div class="genMenuModalCtntSectBox">
                    <p class="genMenuModalCtntSectText">
                        <strong>Draggable Modal</strong>
                    <p>
                </div>
                <div class="genMenuModalCtntDescBox">
                    <p class="genMenuModalCtntDescText">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto assumenda tempora corrupti quisquam. Fugit ad eveniet earum eos cumque sequi reprehenderit quo et alias, sed quidem, dicta quibusdam? Sed ipsum voluptate obcaecati itaque ipsa. Aspernatur fugiat, voluptas quaerat ullam facilis voluptate iste natus asperiores libero velit porro debitis corporis qui excepturi quis, dolorem blanditiis. Atque corrupti eius voluptate veritatis numquam fugiat vero, ullam quia consequatur voluptatem porro necessitatibus odit aliquid autem repellat sapiente aspernatur expedita in tempora quis, nam perspiciatis! Est quasi aspernatur deserunt fuga magni quidem doloremque accusantium repellat quaerat quis molestias, aperiam facere optio commodi, accusamus nisi animi laboriosam excepturi hic nihil perferendis ipsum officia non! Non tempora quasi sit voluptatum, sunt enim culpa reiciendis amet dicta qui dolorem atque laborum excepturi ipsam eveniet repellat nisi. Facilis veniam laudantium iure incidunt impedit quisquam. Hic delectus consequuntur odit ad exercitationem enim corporis ratione quod, reprehenderit inventore fugiat dolore aliquam. Natus necessitatibus vero corrupti nam dicta, hic dolorum, aspernatur nostrum facere error iste quis assumenda veritatis ipsa, eveniet libero. Sunt praesentium iste, neque incidunt omnis ex necessitatibus, amet natus at harum delectus a! Odit commodi explicabo debitis atque molestias, impedit minima, dolorem nisi, fuga voluptates vitae voluptate culpa tenetur! Provident consequatur architecto deleniti expedita quia tempore, voluptate nam corrupti, labore aliquam saepe nostrum soluta autem pariatur. Assumenda rerum dolor neque qui, quam temporibus sapiente repellat totam. At ipsam optio id itaque cum incidunt maxime. Doloribus voluptate consequatur aperiam ad dolore non, praesentium iusto. Porro at fugiat laboriosam perferendis, eveniet molestias accusamus recusandae veritatis iste enim soluta sint eos voluptatem numquam inventore illo, atque, id consectetur totam sequi eum temporibus perspiciatis alias? Veniam, saepe facere aliquid labore ratione quam odit fuga minima temporibus aperiam doloribus cupiditate hic odio accusantium illo sed earum? Illum consectetur in repellat eaque sint ducimus aspernatur aperiam?
                        </br></br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto assumenda tempora corrupti quisquam. Fugit ad eveniet earum eos cumque sequi reprehenderit quo et alias, sed quidem, dicta quibusdam? Sed ipsum voluptate obcaecati itaque ipsa. Aspernatur fugiat, voluptas quaerat ullam facilis voluptate iste natus asperiores libero velit porro debitis corporis qui excepturi quis, dolorem blanditiis. Atque corrupti eius voluptate veritatis numquam fugiat vero, ullam quia consequatur voluptatem porro necessitatibus odit aliquid autem repellat sapiente aspernatur expedita in tempora quis, nam perspiciatis! Est quasi aspernatur deserunt fuga magni quidem doloremque accusantium repellat quaerat quis molestias, aperiam facere optio commodi, accusamus nisi animi laboriosam excepturi hic nihil perferendis ipsum officia non! Non tempora quasi sit voluptatum, sunt enim culpa reiciendis amet dicta qui dolorem atque laborum excepturi ipsam eveniet repellat nisi. Facilis veniam laudantium iure incidunt impedit quisquam. Hic delectus consequuntur odit ad exercitationem enim corporis ratione quod, reprehenderit inventore fugiat dolore aliquam. Natus necessitatibus vero corrupti nam dicta, hic dolorum, aspernatur nostrum facere error iste quis assumenda veritatis ipsa, eveniet libero. Sunt praesentium iste, neque incidunt omnis ex necessitatibus, amet natus at harum delectus a! Odit commodi explicabo debitis atque molestias, impedit minima, dolorem nisi, fuga voluptates vitae voluptate culpa tenetur! Provident consequatur architecto deleniti expedita quia tempore, voluptate nam corrupti, labore aliquam saepe nostrum soluta autem pariatur. Assumenda rerum dolor neque qui, quam temporibus sapiente repellat totam. At ipsam optio id itaque cum incidunt maxime. Doloribus voluptate consequatur aperiam ad dolore non, praesentium iusto. Porro at fugiat laboriosam perferendis, eveniet molestias accusamus recusandae veritatis iste enim soluta sint eos voluptatem numquam inventore illo, atque, id consectetur totam sequi eum temporibus perspiciatis alias? Veniam, saepe facere aliquid labore ratione quam odit fuga minima temporibus aperiam doloribus cupiditate hic odio accusantium illo sed earum? Illum consectetur in repellat eaque sint ducimus aspernatur aperiam?
                        </br></br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto assumenda tempora corrupti quisquam. Fugit ad eveniet earum eos cumque sequi reprehenderit quo et alias, sed quidem, dicta quibusdam? Sed ipsum voluptate obcaecati itaque ipsa. Aspernatur fugiat, voluptas quaerat ullam facilis voluptate iste natus asperiores libero velit porro debitis corporis qui excepturi quis, dolorem blanditiis. Atque corrupti eius voluptate veritatis numquam fugiat vero, ullam quia consequatur voluptatem porro necessitatibus odit aliquid autem repellat sapiente aspernatur expedita in tempora quis, nam perspiciatis! Est quasi aspernatur deserunt fuga magni quidem doloremque accusantium repellat quaerat quis molestias, aperiam facere optio commodi, accusamus nisi animi laboriosam excepturi hic nihil perferendis ipsum officia non! Non tempora quasi sit voluptatum, sunt enim culpa reiciendis amet dicta qui dolorem atque laborum excepturi ipsam eveniet repellat nisi. Facilis veniam laudantium iure incidunt impedit quisquam. Hic delectus consequuntur odit ad exercitationem enim corporis ratione quod, reprehenderit inventore fugiat dolore aliquam. Natus necessitatibus vero corrupti nam dicta, hic dolorum, aspernatur nostrum facere error iste quis assumenda veritatis ipsa, eveniet libero. Sunt praesentium iste, neque incidunt omnis ex necessitatibus, amet natus at harum delectus a! Odit commodi explicabo debitis atque molestias, impedit minima, dolorem nisi, fuga voluptates vitae voluptate culpa tenetur! Provident consequatur architecto deleniti expedita quia tempore, voluptate nam corrupti, labore aliquam saepe nostrum soluta autem pariatur. Assumenda rerum dolor neque qui, quam temporibus sapiente repellat totam. At ipsam optio id itaque cum incidunt maxime. Doloribus voluptate consequatur aperiam ad dolore non, praesentium iusto. Porro at fugiat laboriosam perferendis, eveniet molestias accusamus recusandae veritatis iste enim soluta sint eos voluptatem numquam inventore illo, atque, id consectetur totam sequi eum temporibus perspiciatis alias? Veniam, saepe facere aliquid labore ratione quam odit fuga minima temporibus aperiam doloribus cupiditate hic odio accusantium illo sed earum? Illum consectetur in repellat eaque sint ducimus aspernatur aperiam?
                    </p>
                </div>
            </div>
        `;


    // GENERAL MENU MODAL

        // Initialization
        function initGenMenuModal()
        {
            // Generate the menu modal
            genMenuModalBdr = document.createElement("div");
            genMenuModalBdr.classList.add("genMenuModalBdr");
            genMenuModalBdr.innerHTML = genMenuModalBdrStruct;
            
            genMenuModalBox = document.createElement("div");
            genMenuModalBox.classList.add("genMenuModalBox");
            genMenuModalBox.innerHTML = genMenuModalBoxStruct;

            genMenuModalCtntBdr = document.createElement("div");
            genMenuModalCtntBdr.classList.add("genMenuModalCtntBdr");
            genMenuModalCtntBdr.innerHTML = genMenuModalCtntBdrStruct;

            genMenuModalBox.appendChild(genMenuModalCtntBdr);
            genMenuModalBdr.appendChild(genMenuModalBox);
            document.body.appendChild(genMenuModalBdr);

            attachGenMenuModalEventListeners();
        }
        
        window.onload = initGenMenuModal();


        // Attaches listener for calling the menu modals
        function attachGenMenuModalEventListeners()
        {
            let openGenMenuModalBtn = document.querySelectorAll(".openGenMenuModalBtn");
            
            openGenMenuModalBtn.forEach((btn, index) => 
            {
                const action = () => displayGenMenuModal();

                btn.addEventListener("click" , action);
                btn.action = action;
            });
        }


        // Displays the gen menu modal
        function displayGenMenuModal()
        {
            genMenuModalBox.scrollTo(0,0);
            updateGenMenuModalBoxHeight(Math.round(genMenuModalBdr.offsetHeight - genMenuBoxThreshold));
            genMenuModalBdr.setAttribute("aria-expanded" , "true");
            document.body.setAttribute(`gen-menu-modal-is-dragging` , `true`);

            // Add listener to close the menu when area outisde it is clicked
            genMenuModalBdr.addEventListener("transitionend", function handleTransitionEnd()
            {
                genMenuModalBdr.removeEventListener("transitionend", handleTransitionEnd);
                document.removeEventListener("click" , callHideGenMenuModal);
                document.addEventListener("click", callHideGenMenuModal);
                initGenMenuModalDragging();
            });
        }

        // Hides the menu modal
        function hideGenMenuModal()
        {
            document.removeEventListener("click" , callHideGenMenuModal);
            document.body.removeAttribute(`gen-menu-modal-is-dragging`);
            removeGenModalDragging();

            genMenuModalBdr.setAttribute("aria-expanded" , "false");
        }

        // Calls the hideGenMenuModal via clicks 
        function callHideGenMenuModal(event)
        {
            if(
                !event.target.closest(".openGenMenuModalBtn")
                && !event.target.closest(".genMenuModalBox")
            )
            {
                hideGenMenuModal();
            }
        }

        // Removes the functions associated with currDraggingGenMenuModal of the gen menu modal
        function removeGenModalDragging()
        {
            updateGenMenuModalBoxHeight("reset");

            genMenuModalBox.removeEventListener("mousedown", startDraggingGenMenuModal);
            document.removeEventListener("mousemove", currDraggingGenMenuModal);
            document.removeEventListener("mouseup", stopDraggingGenMenuModal);

            genMenuModalBox.removeEventListener("touchstart", startDraggingGenMenuModal);
            document.removeEventListener("touchmove", currDraggingGenMenuModal);
            document.removeEventListener("touchend", stopDraggingGenMenuModal);

            window.removeEventListener("resize" , calibrateGenMenuModalBoxHeight);
            window.removeEventListener("change" , calibrateGenMenuModalBoxHeight);

        }

        // Initializes the dragging functionality
        function initGenMenuModalDragging()
        {
            startGenMenuBoxHeight = parseInt(genMenuModalBox.offsetHeight);

            genMenuModalBox.addEventListener("mousedown", startDraggingGenMenuModal);
            document.addEventListener("mousemove", currDraggingGenMenuModal);
            document.addEventListener("mouseup", stopDraggingGenMenuModal);

            genMenuModalBox.addEventListener("touchstart", startDraggingGenMenuModal, true);
            document.addEventListener("touchmove", currDraggingGenMenuModal, false);
            document.addEventListener("touchend", stopDraggingGenMenuModal);

            window.addEventListener("resize" , calibrateGenMenuModalBoxHeight);
            window.addEventListener("change" , calibrateGenMenuModalBoxHeight);
        }

        // Recalibrates the menu modal box height when screen size/orientation changes
        function calibrateGenMenuModalBoxHeight()
        {
            genMenuModalBox.style.height = `${Math.round(genMenuModalBdr.offsetHeight - genMenuBoxThreshold)}px`;
        }

        // Updates the height of the menu modal box
        const updateGenMenuModalBoxHeight = (height) => 
        {
            if(height === "reset")
            {
                genMenuModalBox.style.height = `${height}px`;
                genMenuModalBoxHeightTimer = setTimeout(() => 
                {
                    clearTimeout(genMenuModalBoxHeightTimer);
                    genMenuModalBox.style.height = "fit-content";
                }, 150);
            }
            else
            {
                genMenuModalBox.style.height = `${height}px`;
            }
        }

        // Sets initial drag position, genMenuModalBox height and adds isDragging class to the menu modal bdr
        const startDraggingGenMenuModal = (e) => 
        {
            // if((Math.round(genMenuModalBox.scrollTop) > 0)) return console.log("top");
            if((Math.round(genMenuModalBox.scrollTop) > 0) && !(e.target.closest(".genMenuModalDragHandleBdr"))) return;
            genMenuModalIsDragging = true;
            genMenuBoxStartY = e.pageY || e.touches?.[0].pageY;
            startGenMenuBoxHeight = parseInt(genMenuModalBox.offsetHeight);
            genMenuModalBdr.classList.add("isDragging");
        }

        // Calculates the new height for the menu modal box and updates it
        const currDraggingGenMenuModal = (e) => 
        {
            if(!genMenuModalIsDragging) return;
            e.preventDefault();

            const genMenuBoxDeltaY = (e.pageY || e.touches?.[0].pageY);
            let newGenMenuBoxHeight = ((startGenMenuBoxHeight + genMenuBoxStartY) - genMenuBoxDeltaY);
            updateGenMenuModalBoxHeight(newGenMenuBoxHeight);
        
            // Prevent the cards from being clicked while dragging 
            if(((Math.abs(genMenuBoxDeltaY - genMenuBoxStartY) > genAtnModalBoxDragDist)))
            {
                // Add CSS class to disable clicks during dragging
                if(!(genMenuModalBox.classList.contains("disableClicks")))
                {
                    genMenuModalBox.classList.add("disableClicks");
                }

                if((e.target.closest(".genMenuModalDragHandleBdr")) && !(genMenuModalBox.classList.contains("disableScroll")))
                {
                    genMenuModalBox.classList.add("disableScroll");
                }
            }
        }

        // Closes the menu modal if dragged beyond 75% of its height
        const stopDraggingGenMenuModal = () => 
        {
            genMenuModalIsDragging = false;
            genMenuModalBdr.classList.remove("isDragging");
            genMenuModalBox.classList.remove("disableClicks");
            genMenuModalBox.classList.remove("disableScroll");
            const menuModalBoxH = parseInt(genMenuModalBox.style.height);
            menuModalBoxH < Math.round((genMenuModalBdr.offsetHeight * 0.50)) 
                ? hideGenMenuModal() 
                : (menuModalBoxH >= Math.round((genMenuModalBdr.offsetHeight * 0.50))) && (menuModalBoxH < Math.round((genMenuModalBdr.offsetHeight * 0.75)))
                    ? updateGenMenuModalBoxHeight((genMenuModalBdr.offsetHeight * 0.55))
                    : (menuModalBoxH >= Math.round((genMenuModalBdr.offsetHeight * 0.95)))
                        ? updateGenMenuModalBoxHeight((genMenuModalBdr.offsetHeight))
                        : updateGenMenuModalBoxHeight(Math.round(genMenuModalBdr.offsetHeight - genMenuBoxThreshold));
        }
