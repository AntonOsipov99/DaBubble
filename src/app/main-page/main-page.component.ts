import { Component } from '@angular/core';
import { HeadComponent } from './head/head.component';
import { ChatContainerComponent } from './chat-container/chat-container.component';
import { ThreadComponent } from './thread/thread.component';
import { WorkspaceComponent } from './workspace/workspace.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HeadComponent,
    ChatContainerComponent,
    ThreadComponent,
    WorkspaceComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
