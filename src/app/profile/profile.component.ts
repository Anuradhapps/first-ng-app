import { Component, inject, NgModule, signal } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../model/profile.type';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [NgIf],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  profileService = inject(ProfileService);
  profile = signal<Profile>({} as Profile);

  ngOnInit(): void {

  }
  keyUpHandler(event: KeyboardEvent) {
    this.profileService.getProfileFromApi(Number(event.key))
      .then(profile => this.profile.set(profile));
  }

}

